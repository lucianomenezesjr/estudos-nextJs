import {Alert} from "@heroui/react";

export default function Error403() {
  const title = "This is an alert";
  const description = "Thanks for subscribing to our newsletter!";

  return (
    <div className="flex items-center justify-center w-full">
      <Alert
        hideIconWrapper
        color="secondary"
        description="This is a bordered variant alert"
        title="Bordered Alert"
        variant="bordered"
      />
    </div>
  );
}
