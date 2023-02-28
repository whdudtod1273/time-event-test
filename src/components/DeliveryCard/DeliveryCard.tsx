import styles from "@/components/deliveryCard/deliveryCard.module.css";

import DeliveryCardItem from "./DeliveryCardItem";

const DeliveryCard = () => {
  return (
    <div className={styles.deliveryCardWrapper}>
      {["parcel", "morning"].map((item, index) => (
        <DeliveryCardItem key={item + index} deliveryType={item} />
      ))}
    </div>
  );
};

export default DeliveryCard;
