import styles from "@/components/deliveryCard/deliveryCard.module.css";
import useDeliveryType from "@/hooks/useDeliveryType";

interface Props {
  deliveryType: string;
}
const DeliveryCardItem = ({ deliveryType }: Props) => {
  const { deliveryInfo, countdownTime } = useDeliveryType({ method: deliveryType });

  return (
    <div className={styles.deliveryCardItem}>
      {countdownTime ? (
        <>
          <h2>{deliveryInfo.name}</h2>
          <p>{countdownTime}</p>
        </>
      ) : (
        <>
          <h2>{deliveryInfo.name}</h2>
          <p>{deliveryInfo.description}</p>
        </>
      )}
    </div>
  );
};
export default DeliveryCardItem;
