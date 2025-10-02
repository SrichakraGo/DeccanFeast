import React, { useState } from 'react';
import { Star, Camera, X } from 'lucide-react';

interface ReviewFormProps {
  placeId: string;
  onClose: () => void;
  onReviewAdded?: () => void;
}

const API_URL = import.meta.env.VITE_API_URL ?? ''; // empty string fallback

const ReviewForm: React.FC<ReviewFormProps> = ({ placeId, onClose, onReviewAdded }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [photos, setPhotos] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !comment.trim() || !userName.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    if (!API_URL) {
      alert('API URL not configured (VITE_API_URL). Reviews cannot be submitted.');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        placeId,
        userName,
        rating,
        comment,
        date: new Date().toISOString(),
        photos: [] // if you want to support uploading, implement FormData handling
      };

      const res = await fetch(`${API_URL}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Failed to submit');
      }

      await res.json();
      alert('Thank you — your review was submitted.');
      if (typeof onReviewAdded === 'function') onReviewAdded();
      onClose();
    } catch (err) {
      console.error('Submit error:', err);
      alert('Failed to submit review. Please try again later.');
    } finally {
      setSubmitting(false);
    }
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
        aria-label={`${i + 1} star`}
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

  const handlePhotoFiles = (files: FileList | null) => {
    if (!files) return;
    setPhotos(prev => [...prev, ...Array.from(files)]);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-xl mx-auto shadow-lg z-50">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-800">Write a Review</h4>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
          <input
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-indigo-200"
            placeholder="e.g., Rishith"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
          <div className="flex items-center space-x-2">{renderInteractiveStars()}</div>
          <div className="text-xs text-gray-500 mt-1">{rating > 0 ? `${rating} / 5` : 'Select a rating'}</div>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            rows={4}
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-indigo-200"
            placeholder="Tell others about your experience..."
            required
          />
        </div>

        {/* Photo upload (optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Photos (optional)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={e => handlePhotoFiles(e.target.files)}
            className="text-sm"
          />
          {photos.length > 0 && (
            <div className="flex gap-2 mt-2">
              {photos.map((f, idx) => (
                <div key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{f.name}</div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 rounded border text-sm"
            disabled={submitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg text-white transition-colors ${
            submitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-orange-400 hover:bg-orange-600'
          }`}
          disabled={submitting}
          >
  {submitting ? 'Submitting...' : 'Submit Review'}
</button>

        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
