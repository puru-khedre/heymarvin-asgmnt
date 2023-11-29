const Card = ({ src, children, className, label }) => {
  return (
    <div className={`h-full w-full bg-blue-400/30 relative ${className}`}>
      <img className="h-full w-full bg-cover bg-center" src={src} />
      <div className="absolute bottom-0 w-full text-white p-4">{children}</div>
      <div className="absolute m-3 top-0 left-0 text-white border border-white px-3.5 py-0.5 rounded-full">
        {label}
      </div>
    </div>
  );
};

export default Card;
