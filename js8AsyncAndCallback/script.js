const makeRequest = (url, onSucess) => {
  //doing smth
};

//KIND OF CALLBACK HELL IN HERE

makeRequest("api/sellers/${sellerId}", (seller) => {
  const firstProductId = seller.productIds[0];

  makeRequest("/api/products/${firstProductId}", (product) => {
    const firstReviewId = seller.product.reviewsIds[0];

    makeRequest("/api/reviews/${firstReviewId}", (review) => {
      const authorName = seller.product.review.author.name;
    });
  });
});

//PROMISE

const promise = new Promise((fulfill, reject) => {
  console.log("pending func status");

  setTimeout(() => {
    if (Math.random() > 0.5) {
      fulfill("fulfilled func status");
    } else {
      reject("rejected func status");
    }
  }, 3000);
});

promise
  .then((successData) => {
    console.log("success Data", successData);
  })
  .catch((errorData) => {
    console.log("error Data", errorData);
  })
  .finally(() => {
    console.log("results");
  });

//REWRTING FISRTS CALLBACK FUNC USING PROMISES

const makeRequest1 = (url, onSucess) => {
  return new Promise((fulfill) => {
    fulfill("status: fulfilled");
  });
};

const sellerId = 142;

makeRequest1(`/api/sellers/${sellerId}`)
  .then((seller) => {
    const firstProductId = seller.productIds[1];

    return makeRequest1(`/api/products/${firstProductId}`);
  })
  .then((product) => {
    const firstReviewId = product.reviewsIds[1];

    return makeRequest1(`/api/rewies/${firstReviewId}`);
  })
  .then((review) => {
    const authorName = review.author.name;
  })
  .catch((error) => {
    console.log(error);
  });

//ASYNC

const getSomething = async () => {
  return new Promise((fulfill) => {
    setTimeout(() => {
      fulfill("xdxd");
    }, 3000);
  });
};

getSomething().then((something) => {
  console.log(something);
});

const something = await getSomething();

console.log(something);

const makeRequestAsync = (url, onSucess) => {
  return new Promise((fulfill) => {
    fulfill("status: fulfilled");
  });
};

const sellerId2 = 142;

try {
  makeRequestAsync(`/api/sellers/${sellerId}`);
  const seller = await makeRequestAsync(`/api/sellers/${sellerId}`);
  const firstProductId = seller.productIds[1];

  const product = await makeRequestAsync(`/api/products/${firstProductId}`);
  const firstReviewId = product.reviewsIds[1];

  const review = await makeRequestAsync(`/api/rewies/${firstReviewId}`);
  const authorName = review.author.name;
} catch (error) {
  console.log(error);
}
