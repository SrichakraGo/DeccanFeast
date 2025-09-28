import React, { useState } from 'react';
import { Star, Camera, X } from 'lucide-react';

interface ReviewFormProps {
  placeId: string;
  onClose: () => void;
  onReviewAdded?: () => void;
}

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
    fetch('http://localhost:4000/reviews', {
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating *
          </label>
          <div className="flex items-center space-x-1">
            {renderInteractiveStars()}
            {rating > 0 && (
              <span className="ml-2 text-sm text-gray-600">
                {rating} star{rating !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Review *
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            placeholder="Share your experience with this place..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Photos (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
            <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Click to upload photos</p>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Review'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;