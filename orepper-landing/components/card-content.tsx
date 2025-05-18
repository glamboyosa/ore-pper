type CardContentProps = {
  data: {
    title: string;
    render: React.ReactNode;
  };
};

const CardContent = ({ data }: CardContentProps) => {
  return (
    <div className="flex h-3/4 justify-center items-center flex-col">
      <h3 className="text-5xl font-bold tracking-tight dark:text-slate-50 text-gray-800">
        {data.title}
      </h3>
      {data.render}
    </div>
  );
};

export default CardContent;
