import ExternalIcon from "./Externalcon.server";


export default function DocsButton({url, label}) {
    return (
      <a
        href={url}
        target="_blank"
        className="bg-white shadow py-2 px-5 rounded-full inline-flex items-center hover:opacity-80"
        rel="noreferrer"
      >
        {label}
        <ExternalIcon />
      </a>
    );
  }