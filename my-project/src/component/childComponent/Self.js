import React from "react";
import { MainSelf } from "../../css/cssHome";

const Self = () => {
  return (
    <div className="container">
      <MainSelf>
        <div className="child-self">
          <div className="title-self">
            {" "}
            <h1>EPIC GAMES STORE REFUND POLICY</h1>
            <p>
              Don’t like what you bought? Read on for how to return your
              purchase for a refund. If you’ve recently made a purchase through
              the Epic Games Store and want a refund, you’re in the right place.
              Below you’ll find all the info on what you can refund, when you
              can refund, and how to begin the process.
            </p>
          </div>
          <div>
            <h3> What types of products can I return for a refund?</h3>
            <p>
              Games and products you purchase through the Epic Games Store are
              generally eligible for a refund. These products are marked
              “refundable”. If a game or product is marked as "non-refundable",
              then it is not eligible for a refund. Products that include
              virtual currency or other consumables are marked “non-refundable”
              and are not eligible for refund. Also, most in-app purchases are
              non-refundable. Epic cannot provide refunds for purchases made
              outside of the Epic Games Store.
            </p>
            <p>
              For purchases marked “self-refundable”, you can refund the item
              online by yourself. Sign into your account on our website, click
              the Account dropdown on the top right of the store, go to the
              Transactions tab and click the game title. If the game is eligible
              for a self-service refund, please click the “Refund” button to
              start the refund process.
            </p>
          </div>
          When are products eligible for a refund?
          <div>
            <h3>When are products eligible for a refund?</h3>
            <p>
              Games and products are eligible for refund within 14 days of
              purchase if they are marked as “refundable” or “self-refundable”.
              However, you must have less than 2 hours of runtime on record.
              Products that include virtual currency or other consumables and
              products or games that are marked as “non-refundable” are not
              eligible for refund.
            </p>
            <p>
              You will not be eligible for refunds for games or products from
              which you have been banned or for which you have otherwise
              violated the terms of service. In addition, you may not be
              eligible for refunds if Epic determines that you are abusing the
              refund policy.
            </p>
          </div>
          <div>
            <h3>How can I request a refund?</h3>
            <p>
              For purchases marked “self-refundable”, you can refund the item
              online by yourself. Sign into your account on our website, click
              the Account dropdown on the top right of the store, go to the
              Transactions tab and click the game title. If the game is eligible
              for a self-service refund, please click the “Refund” button to
              start the refund process.
            </p>
            <p>
              For purchases marked “refundable” or if you have questions about
              the refund process, you can request a refund by clicking “Contact
              Us” on our Epic Games Store and Launcher help page and submitting
              a refund request.{" "}
            </p>
          </div>
          <div>
            <h3>How will I get my refund?</h3>
            <p>
              By default, purchases will be refunded to the payment method used
              to make the purchase, but this may not always be possible
              depending on the payment method. You and Epic may also agree that
              the refund be issued by alternative method. Please note the amount
              of time for the refund to process is dependent on your payment
              method.
            </p>
          </div>
          <div>
            <h3>What about pre-purchases?</h3>
            <p>
              You may cancel your pre-purchase and get a refund at any time
              before the official release date set by the publisher/developer on
              the Epic Games Store. After the game is released, you may request
              a refund within 14 days if you have less than 2 hours of runtime
              on record.
            </p>
          </div>
          <div>
            <h3>What if a product I recently purchased goes on sale?</h3>
            <p>
              You can refund your purchase for a full refund and immediately
              re-purchase the product as long as it abides by the above
              guidelines. We do not consider this to be refund abuse.
            </p>
            <p>
              If Epic determines you are abusing the refund policy, you may not
              be eligible for refunds. The policy exists so you can purchase
              with comfort and make sure you only spend on the games you want to
              pay for and play!
            </p>
          </div>
        </div>
      </MainSelf>
    </div>
  );
};

export default Self;
