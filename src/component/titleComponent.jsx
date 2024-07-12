export default function TitleComponent(props) {
  return (
    <>
      <div className="font-bold text-2xl md:mx-5 text-blues mt-10 mb-3">
        {props.title}
      </div>
    </>
  );
}
