import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <article>
      <h1> Title of the page {slug}</h1>
      <hr />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos enim
        exercitationem dolore omnis accusantium hic nobis soluta ipsa architecto
        quibusdam iusto ipsum atque deserunt eius, nostrum cupiditate alias
        ipsam vero.
      </p>
    </article>
  );
};

export default slug;
