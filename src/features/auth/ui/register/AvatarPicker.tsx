"use client";

import { Button } from "@/src/shared/ui/button/Button";
import { ButtonType, ButtonSize } from "@/src/shared/ui/button/properties";
import { useState, useEffect, useRef } from "react";
import { UserAvatar } from "@/src/shared/ui/UserAvatar";

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
      <UserAvatar size={avatarSize} url={avatar?.url} />
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
