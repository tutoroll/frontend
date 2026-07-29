"use client";

import Image from "next/image";
import { Button } from "@/src/shared/ui/button/Button";
import { ButtonType, ButtonSize } from "@/src/shared/ui/button/properties";
import { UserAvatarStockIcon } from "@/src/shared/ui/icons/UserAvatarStock";
import { useState, useEffect, useRef } from "react";

interface AvatarPickerProps {
  onSelected?: (data: UserAvatarData) => void;
  avatarSize?: number;
}

interface UserAvatarData {
  data: File;
  url: string;
}

export const AvatarPicker = ({
  onSelected,
  avatarSize = 120,
}: AvatarPickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [avatar, setAvatar] = useState<UserAvatarData | null>();

  useEffect(() => {
    const avatarUrl = avatar?.url;
    if (!avatarUrl) return;
    return () => {
      URL.revokeObjectURL(avatarUrl);
    };
  }, [avatar]);

  return (
    <div className="flex flex-col gap-1">
      {avatar ? (
        <div
          className="relative overflow-clip rounded-full"
          style={{ width: avatarSize, height: avatarSize }}
        >
          <Image src={avatar.url} alt="Аватар" fill className="object-cover" />
        </div>
      ) : (
        <UserAvatarStockIcon size={avatarSize} />
      )}
      <Button
        onClick={() => inputRef.current?.click()}
        title="Выбрать фото"
        type={ButtonType.teritary}
        size={ButtonSize.h40}
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const imageUrl = URL.createObjectURL(file);
          const data = { url: imageUrl, data: file };
          setAvatar(data);
          onSelected?.(data);
        }}
      />
    </div>
  );
};
