import React from "react";

import InputField from "@/app/components/InputField";
import useActiveSection from "@/app/hooks/useActiveSection";
import OptionField from "@/app/components/OptionField";
import RangeField from "@/app/components/RangeField";
import useQrInfo from "@/app/hooks/useQrInfo";
const QrStyle = () => {
  const { activeSection } = useActiveSection();
  const {
    qr,
    qr_size,
    qr_imageSettings,
    qr_image_positioning,
    qr_image_excavate,
    qr_image_X,
    qr_image_Y,
    qr_fg,
    qr_bg,
    qr_image_src,
    qr_image_width,
    qr_image_height,
  } = useQrInfo();
  if (activeSection !== 2) return null;

  return (
    <div className="border-2 border-main-dark rounded p-4 bg-white">
      <form>
        <div className="w-[calc(50%-1rem)] md1:w-full ">
          <InputField
            name="Size"
            placeholder="QR size"
            inputType="number"
            id="size"
            value={qr.size}
            onChange={qr_size}
          />
        </div>
        <div className="w-full flex gap-8 md1:flex-col md1:gap-3">
          <InputField
            name="Foreground"
            placeholder="https://example.com"
            inputType="color"
            id="foreground"
            value={qr.fgColor}
            onChange={qr_fg}
          />
          <InputField
            name="Background"
            placeholder="https://example.com"
            inputType="color"
            id="background"
            value={qr.bgColor}
            onChange={qr_bg}
          />
        </div>

        {/* image settings */}
        <section className="flex items-center gap-3 my-4">
          <div className="bg-main-dark w-[10px] h-[10px] rounded-sm"></div>
          <p className="font-bold text-xl">Image Settings</p>
        </section>

        <div className="w-[calc(50%-1rem)] md1:w-full">
          <InputField
            name="Image url"
            placeholder="Image url for QR code"
            inputType="string"
            id="imageurl"
            value={qr_imageSettings.src}
            onChange={qr_image_src}
          />
        </div>
        <div className="w-full flex gap-8 md1:flex-col md1:gap-3">
          <InputField
            name="Width"
            placeholder=""
            inputType="number"
            id="imagewidth"
            value={qr_imageSettings.width}
            onChange={qr_image_width}
          />
          <InputField
            name="Height"
            placeholder=""
            inputType="number"
            id="imageheight"
            value={qr_imageSettings.height}
            onChange={qr_image_height}
          />
        </div>
        <div className="w-full flex gap-8 md1:flex-col md1:gap-3">
          <OptionField
            name="Image position"
            id="imageposition"
            options={["CENTERED", "FLEXIBLE"]}
            value={qr_imageSettings.position}
            onChange={qr_image_positioning}
          />
          <OptionField
            name="Excavate Image"
            id="excavateimage"
            options={["YES", "NO"]}
            value={qr_imageSettings.excavate}
            onChange={qr_image_excavate}
          />
        </div>
        <div className="w-full flex gap-8 md1:flex-col md1:gap-3">
          <RangeField
            name="Image X"
            placeholder=""
            id="imageX"
            min={0}
            max={qr.size - qr_imageSettings.width}
            value={qr_imageSettings.x || 0}
            onchange={qr_image_X}
          />
          <RangeField
            name="Image Y"
            placeholder=""
            value={qr_imageSettings.y || 0}
            onchange={qr_image_Y}
            id="imageY"
            min={0}
            max={qr.size - qr_imageSettings.height}
          />
        </div>
      </form>
    </div>
  );
};

export default QrStyle;
