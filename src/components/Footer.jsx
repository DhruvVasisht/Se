const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Made with ❤{" "}
            <span>
              <a target="_blank"
                href="https://github.com/DhruvVasisht"
                className="font-medium underline decoration-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                Dhruv Vasisht
              </a>
            </span>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
