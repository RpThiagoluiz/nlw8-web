import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

// Popover -> dont need to useState when u use Popover.

export const Widget = () => {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam sit
        quae in obcaecati odio perspiciatis dolor voluptas possimus! Dolorum
        modi enim maxime quibusdam repudiandae odio officiis molestias
        voluptatum, ab sequi!
      </Popover.Panel>

      <Popover.Button className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
