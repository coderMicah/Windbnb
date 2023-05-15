function Stay({stay}) {
  const { photo, superHost, type, beds, rating, title } = stay;
  return (
    <div>
      <img className="rounded-3xl h-[400px] object-cover" src={photo} alt={`${title} image`} />
      <div className="flex items-center mt-4 mb-2 text-[#828282] text-sm font-medium">
        {superHost && (
          <p className="text-[12px] font-bold py-1 px-2 mr-2 border rounded-xl uppercase">
            superhost
          </p>
        )}
        <p className="pr-2">{type}</p>
        <p>{beds}</p>
        <p className="flex items-center text-[#4F4F4F] ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 pr-2 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          {rating}
        </p>
      </div>

      <h2 className="font-semibold">{title}</h2>
    </div>
  );
}

export default Stay;
