export default function ContributorAvatars() {
  return (
    <div class="flex flex-wrap gap-2">
      {/* Create 75 circles */}
      {Array.from({ length: 75 }, (_, i) => (
        <div
          key={i}
          className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-50 to-purple-100"
        />
      ))}
    </div>
  );
}
