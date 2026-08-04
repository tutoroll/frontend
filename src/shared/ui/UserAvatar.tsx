import Image from "next/image";

import { UserAvatarStockIcon } from "./icons/UserAvatarStock";

export const UserAvatar = ({
  url,
  size,
}: {
  url: string | null | undefined;
  size: number;
}) => {
  return url ? (
    <div
      className="relative overflow-clip rounded-full"
      style={{ width: size, height: size }}
    >
      <Image src={url} alt="Аватар" fill className="object-cover" />
    </div>
  ) : (
    <UserAvatarStockIcon size={size} />
  );
};
