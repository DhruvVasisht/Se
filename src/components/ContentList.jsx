import Button from "./Button";

const ContentList = () => {
  return (
    <div>
      <div className="card mt-2 bg-slate-100/5 center-container card-compact bg-base-100 w-96 shadow-xl">
        <figure className="aspect-[16/9]">
          <iframe
            className="w-full h-full"
            width="1044"
            height="587"
            src="https://www.youtube.com/embed/OcUy1pki-Og"
            title="Captain America: Brave New World | It&#39;s Time"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title font-bold cursor-pointer">Anime Title</h2>
          <p className="text-lg font-thin">2014 · 25 ep · ⭐8.44 · 🏆top 37</p>
          <div className="flex gap-3">
            <div className="badge badge-secondary font-semibold badge-outline rounded-md">
              secondary
            </div>
            <div className="badge badge-secondary font-bold badge-outline rounded-md">
              secondary
            </div>
            <div className="badge badge-secondary font-bold badge-outline rounded-md">
              secondary
            </div>
          </div>
          <p className="mt-3 font-thin">
            Description Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Eveniet labore iste ad, sunt earum amet fugit quae suscipit
            laudantium veritatis.
          </p>

          <div className="mt-1 flex justify-between">
            <Button text={"⬅️ BACK"} />
            <Button text={"🙈 HIDE"} />
            <Button text={"NEXT ➡️"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentList;
