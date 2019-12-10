import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const BookCard = book => {
  const { title, author, price, image, addToCart, addedCount } = book;
  return (
    <Card>
      <div className="card-image">
        <Image src={image} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="euro sign" />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, book)}>
        Add to Cart {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default BookCard;
