import React, { useState } from 'react';
import { Star, Camera, User } from 'lucide-react';
import { useEffect } from 'react';
import ReviewForm from './ReviewForm';

interface ReviewSectionProps {
  placeId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ placeId }) => {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4000/reviews/${placeId}`);
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      setReviews([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line
  }, [placeId]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">Customer Reviews</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Write Review
        </button>
      </div>

      {showForm && (
        <ReviewForm 
          placeId={placeId} 
          onClose={() => setShowForm(false)}
          onReviewAdded={fetchReviews}
        />
      )}

      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No reviews yet. Be the first to review this place!</p>
          </div>
        ) : (
          reviews.map(review => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-gray-200 rounded-full p-2">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{review.userName}</h4>
                    <span className="text-sm text-gray-500">
                      {review.date ? new Date(review.date).toLocaleDateString() : ''}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  {review.photos && review.photos.length > 0 && (
                    <div className="flex space-x-2">
                      {review.photos.map((photo: string, index: number) => (
                        <img
                          key={index}
                          src={photo}
                          alt="Review photo"
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;