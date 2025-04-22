import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  MessageCircle, 
  ThumbsUp, 
  User, 
  Filter
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

// Review interface
interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  location: string;
  likes: number;
  liked: boolean;
}

// Initial reviews data
const initialReviews: Review[] = [
  {
    id: 1,
    name: "Pierre Mensah",
    date: "15/03/2023",
    rating: 5,
    comment: "J'ai utilisé les briques creuses de Cornerstone pour la construction de ma maison à Lomé. La qualité est exceptionnelle et le service client est impeccable. Je recommande vivement!",
    location: "Lomé, Togo",
    likes: 12,
    liked: false,
  },
  {
    id: 2,
    name: "Lucien Koumessi",
    date: "22/04/2023",
    rating: 4,
    comment: "Les briques sont de très bonne qualité, solides et uniformes. La livraison était rapide comme promis. Un point à améliorer serait la communication sur l'heure exacte de livraison, mais globalement très satisfaite.",
    location: "Aného, Togo",
    likes: 8,
    liked: false,
  },
  {
    id: 3,
    name: "Jean Komlan",
    date: "05/05/2023",
    rating: 5,
    comment: "En tant qu'entrepreneur dans le bâtiment, j'ai essayé plusieurs fournisseurs de briques au Togo, et Cornerstone est définitivement le meilleur. La constance dans la qualité est remarquable, et c'est essentiel pour mes projets professionnels.",
    location: "Kpalimé, Togo",
    likes: 17,
    liked: false,
  },
  {
    id: 4,
    name: "Sophie Amavi",
    date: "11/06/2023",
    rating: 3,
    comment: "Les produits sont bons mais j'ai eu un petit retard dans la livraison. L'équipe a été réactive pour résoudre le problème. J'apprécierais un meilleur suivi pour les prochaines commandes.",
    location: "Lomé, Togo",
    likes: 4,
    liked: false,
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    comment: "",
    location: "",
  });
  const [filter, setFilter] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReviewForm({ ...reviewForm, [name]: value });
  };

  const handleRatingChange = (rating: number) => {
    setReviewForm({ ...reviewForm, rating });
  };

  const handleLike = (id: number) => {
    setReviews(reviews.map((review) => {
      if (review.id === id) {
        const liked = !review.liked;
        return {
          ...review,
          likes: liked ? review.likes + 1 : review.likes - 1,
          liked,
        };
      }
      return review;
    }));
  };

  const submitReview = () => {
    if (!reviewForm.name || !reviewForm.comment) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      name: reviewForm.name,
      date: new Date().toLocaleDateString("fr-FR"),
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      location: reviewForm.location || "Togo",
      likes: 0,
      liked: false,
    };

    setReviews([newReview, ...reviews]);
    setReviewForm({
      name: "",
      rating: 5,
      comment: "",
      location: "",
    });
    setDialogOpen(false);

    toast({
      title: "Avis publié",
      description: "Merci d'avoir partagé votre expérience avec Cornerstone Briques.",
    });
  };

  const filteredReviews = filter ? reviews.filter((review) => review.rating === filter) : reviews;

  // Render stars based on rating
  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={interactive ? () => handleRatingChange(index + 1) : undefined}
        className={interactive ? "cursor-pointer focus:outline-none" : ""}
      >
        <Star 
          className={`h-5 w-5 ${
            index < rating 
              ? "text-yellow-400 fill-yellow-400" 
              : "text-gray-300"
          }`} 
        />
      </button>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-cornerstone-darkgray">
              Avis de nos Clients
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de nos produits et services.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold text-cornerstone-darkgray">
                  Évaluations et Avis
                </h2>
                <div className="flex items-center mt-2">
                  <div className="flex mr-2">
                    {renderStars(4.5)}
                  </div>
                  <span className="text-lg font-medium">4.5/5</span>
                  <span className="text-gray-500 ml-2">({reviews.length} avis)</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <select 
                      className="bg-transparent outline-none text-sm"
                      value={filter || ""}
                      onChange={(e) => setFilter(e.target.value ? parseInt(e.target.value) : null)}
                    >
                      <option value="">Tous les avis</option>
                      <option value="5">5 étoiles</option>
                      <option value="4">4 étoiles</option>
                      <option value="3">3 étoiles</option>
                      <option value="2">2 étoiles</option>
                      <option value="1">1 étoile</option>
                    </select>
                  </div>
                </div>
                
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-cornerstone-brick hover:bg-red-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Écrire un avis
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Partagez votre expérience</DialogTitle>
                      <DialogDescription>
                        Votre avis nous aide à améliorer nos produits et services.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 py-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Note <span className="text-red-500">*</span>
                        </label>
                        <div className="flex space-x-1">
                          {renderStars(reviewForm.rating, true)}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={reviewForm.name}
                          onChange={handleReviewChange}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                          Localisation
                        </label>
                        <Input
                          id="location"
                          name="location"
                          value={reviewForm.location}
                          onChange={handleReviewChange}
                          placeholder="Votre ville, pays"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                          Commentaire <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="comment"
                          name="comment"
                          value={reviewForm.comment}
                          onChange={handleReviewChange}
                          placeholder="Partagez votre expérience avec nos produits..."
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                    
                    <DialogFooter>
                      <Button 
                        variant="outline" 
                        onClick={() => setDialogOpen(false)}
                      >
                        Annuler
                      </Button>
                      <Button 
                        className="bg-cornerstone-blue hover:bg-blue-600"
                        onClick={submitReview}
                      >
                        Publier l'avis
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredReviews.length > 0 ? (
                filteredReviews.map((review) => (
                  <Card key={review.id} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-cornerstone-blue/10 rounded-full flex items-center justify-center text-cornerstone-blue mr-3">
                            <User className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium text-cornerstone-darkgray">{review.name}</h3>
                            <p className="text-xs text-gray-500">{review.location} • {review.date}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{review.comment}</p>
                      
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(review.id)}
                          className={`text-gray-500 hover:text-gray-700 ${review.liked ? 'text-cornerstone-blue' : ''}`}
                        >
                          <ThumbsUp className={`h-4 w-4 mr-1 ${review.liked ? 'fill-cornerstone-blue text-cornerstone-blue' : ''}`} />
                          <span>{review.likes}</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <MessageCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-900">Aucun avis trouvé</h3>
                  <p className="text-gray-500 mt-2">
                    {filter 
                      ? `Aucun avis avec ${filter} étoiles n'a été trouvé.` 
                      : "Soyez le premier à partager votre expérience avec Cornerstone Briques."
                    }
                  </p>
                  {filter && (
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setFilter(null)}
                    >
                      Voir tous les avis
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Reviews;
