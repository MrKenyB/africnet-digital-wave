
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const VideoPresentation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-12 text-center">
        <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden group cursor-pointer" onClick={() => setIsOpen(true)}>
          {/* Placeholder image - replace with your actual thumbnail */}
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Vidéo de présentation" 
            className="w-full aspect-video object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <Button 
              size="lg" 
              className="bg-africanet-orange hover:bg-africanet-orange/90 text-white"
            >
              <Play className="mr-2 h-6 w-6" />
              Regarder la vidéo
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          <div className="aspect-video">
            {/* Replace this iframe src with your actual video URL */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Présentation AFRIC'NET"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoPresentation;
