

export interface Photo {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  }
  
  export const generatePhotos = (count: number = 8): Photo[] => {
    return Array.from({ length: count }, (_, index) => {
      const id = String(index + 1);
      return {
        id,
        src: `/gallery/photo${id}.jpg`,
        alt: `Photo ${id}`,
        width: 1600, 
        height: 1200, 
      };
    });
  };
  
  export const getPhotos = (): Photo[] => {
    return generatePhotos(8); 
  };
  
  export const getPhotoById = (id: string): Photo | undefined => {
    return getPhotos().find(photo => photo.id === id);
  };