import placeholder from '../../img/placeholder.jpg';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';


const Card = () => {
  const cardInfo = [
    {
      title: 'Mountains',
      description: 'Explore the beauty of the mountains.',
      image: img1,
      URL:  "link1",
    },
    {
      title: 'Ocean',
      description: 'Dive into the deep blue sea.',
      image: img2,
      URL:  "link2",
    },
    {
      title: 'Forest',
      description: 'Wander through the lush forest.',
      image: img3,
      URL:  "link3",
    },
    {
      title: 'Desert',
      description: 'Feel the heat of the desert.',
      image: img4,
      URL:  "link4",
    },
  ];

  return (
    <div className="container text-center">
      <div className="row">
        {cardInfo.map((card, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img src={card.image ? card.image: placeholder} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{card.title ? card.title:"Card title missing 😔"}</h5>
                <p className="card-text">{card.description ? card.description:"Card description missing 😔"}</p>
                <a href={card.URL} className="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
