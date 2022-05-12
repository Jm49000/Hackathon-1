export default function Modal(item) {
  return (
    <li key={item.city}>
      <p>{item.placeName}</p>
    </li>
  );
}
