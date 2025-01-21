export default function TermsAndConditionComponent({
  first,
  second,
  third,
}: {
  first: string;
  second: string;
  third: string;
}) {
  return (
    <div className="absolute bottom-0 border-t border-dotted border-black w-full p-1">
      <p className="font-bold">Terms and Conditions:</p>
      <p>1) {first}</p>
      <p>2) {second}</p>
      <p>3) {third}</p>
    </div>
  );
}
