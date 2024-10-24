interface ImageDisplayProps {
    src: string; 
    alt?: string; 
  }
  
  export default function ImageDisplay({ src, alt = "Image" }: ImageDisplayProps) {
    return (
    <div>
      <img className="w-full rounded-xl shadow" src={src} alt={alt}/>

      <div className="h-5"/>
    </div>  
    );
  }