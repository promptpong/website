const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32V64H12V32C12 20.9543 20.9543 12 32 12C43.0457 12 52 20.9543 52 32C52 43.0457 43.0457 52 32 52H29C24.0294 52 20 56.0294 20 61V64H32Z"
        fill="currentColor"
      />
      <path
        d="M42 32C42 37.5228 37.5228 42 32 42C26.4772 42 22 37.5228 22 32C22 26.4772 26.4772 22 32 22C37.5228 22 42 26.4772 42 32Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
