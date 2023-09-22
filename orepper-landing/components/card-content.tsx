type CardContentProps = {
  data: {
    title: string;
    render: JSX.Element;
  };
};

const CardContent = ({ data }: CardContentProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="text-5xl font-bold tracking-tight text-gray-800">
        {data.title}
      </h3>
      {data.render}
    </div>
  );
};

export default CardContent;
