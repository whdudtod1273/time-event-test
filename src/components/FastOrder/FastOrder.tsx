import useFastOrder from "@/hooks/useFastOrder";
import styles from "@/components/FastOrder/FastOrder.module.css";

const FastOrder = () => {
  const { orderMent } = useFastOrder();

  return (
    <div className={styles.fastOrderWrapper}>
      <h2>Fast 주문</h2>
      <p>{orderMent}</p>
    </div>
  );
};
export default FastOrder;
