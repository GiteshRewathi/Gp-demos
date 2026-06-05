export function PlantSproutSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <ellipse cx="100" cy="248" rx="72" ry="18" fill="#3d2817" opacity="0.85" />
      <ellipse cx="100" cy="242" rx="58" ry="14" fill="#5c3d24" />
      <ellipse cx="100" cy="236" rx="44" ry="10" fill="#6b4a2e" />

      <path
        d="M100 236 C98 200 96 168 100 130 C102 168 104 200 100 236Z"
        fill="#2d6b32"
      />
      <path
        d="M100 130 C72 118 52 92 48 68 C70 88 88 108 100 130Z"
        fill="#3d9a45"
      />
      <path
        d="M100 130 C128 118 148 92 152 68 C130 88 112 108 100 130Z"
        fill="#45a84f"
      />
      <path
        d="M100 155 C78 148 62 128 58 108 C76 122 90 138 100 155Z"
        fill="#52b85c"
      />
      <path
        d="M100 155 C122 148 138 128 142 108 C124 122 110 138 100 155Z"
        fill="#4aad54"
      />
      <path
        d="M100 180 C85 176 74 162 72 148 C86 158 94 170 100 180Z"
        fill="#5ec468"
      />
      <path
        d="M100 180 C115 176 126 162 128 148 C114 158 106 170 100 180Z"
        fill="#56bd60"
      />
      <ellipse cx="100" cy="108" rx="14" ry="20" fill="#62cc6c" transform="rotate(-8 100 108)" />
      <ellipse cx="100" cy="88" rx="12" ry="18" fill="#6ed678" transform="rotate(5 100 88)" />
    </svg>
  );
}
