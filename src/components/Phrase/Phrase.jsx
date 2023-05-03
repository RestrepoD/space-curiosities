import "./Phrase.css";
const Phrase = ({phrase}) => {
  return (
    <section className="phrase_cont">
        <p>{phrase}</p>
    </section>
  )
};
export default Phrase;