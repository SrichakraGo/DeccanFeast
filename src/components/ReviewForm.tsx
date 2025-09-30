import React, { useState } from 'react';
import { Star, Camera, X } from 'lucide-react';

interface ReviewFormProps {
  placeId: string;
  onClose: () => void;
  onReviewAdded?: () => void;
}

const API_URL = import.meta.env.VITE_API_URL;

const ReviewForm: React.FC<ReviewFormProps> = ({ placeId, onClose, onReviewAdded }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !comment.trim() || !userName.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    setSubmitting(true);
    fetch(`${API_URL}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        placeId,
        userName,
        rating,
        comment,
        date: new Date().toISOString(),
        photos: []
      })
    })
      .then(res => res.json())
      .then(() => {
        alert('Thank you for your review! It has been submitted successfully.');
        if (typeof onReviewAdded === 'function') onReviewAdded();
        onClose();
      })
      .catch(() => {
        alert('Failed to submit review. Please try again.');
      })
      .finally(() => setSubmitting(false));
  };

  const renderInteractiveStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setRating(i + 1)}
        onMouseEnter={() => setHoveredRating(i + 1)}
        onMouseLeave={() => setHoveredRating(0)}
        className="focus:outline-none"
      >
        <Star
          className={`w-8 h-8 transition-colors ${
            i < (hoveredRating || rating) 
              ? 'text-yellow-400 fill-current' 
              : 'text-gray-300 hover:text-yellow-400'
          }`}
        />
      </button>
    ));
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-800">Write a Review</h4>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* rest is unchanged */}
      </form>
    </div>
  );
};

export default ReviewForm;
