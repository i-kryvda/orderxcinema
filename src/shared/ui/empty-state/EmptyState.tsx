type Props = {
  text: string;
};

export function EmptyState({ text }: Props) {
  return <h1>{text}</h1>;
}
