export const PHONE = "+254 714 866 809";
export const TEL = "tel:+254714866809";
export const MAIL = "mailto:info@twobobenterprises.co.ke";
export const EMAIL = "info@twobobenterprises.co.ke";
export const ADDRESS = "Kyuna Crescent #30, Westlands, Nairobi, Kenya";

export type ServiceIcon = "bolt" | "sun" | "fan" | "camera" | "battery" | "engine";

export const services: {
  title: string;
  copy: string;
  image: string;
  icon: ServiceIcon;
}[] = [
  {
    title: "Electrical Engineering",
    copy: "Design, install and maintain power systems for homes, commercial and industrial sites.",
    image: "/work/work-09.jpg",
    icon: "bolt",
  },
  {
    title: "Solar Energy",
    copy: "Grid-tied and off-grid solar with battery storage to cut costs and keep you online.",
    image: "/work/work-11.jpg",
    icon: "sun",
  },
  {
    title: "HVAC Systems",
    copy: "Heating, ventilation and air conditioning built for comfort and efficiency.",
    image: "/work/work-02.jpg",
    icon: "fan",
  },
  {
    title: "CCTV & Security",
    copy: "Surveillance, access control and monitoring to protect people and property.",
    image: "/work/work-16.jpg",
    icon: "camera",
  },
  {
    title: "UPS Installation",
    copy: "Uninterruptible power for servers, clinics and critical equipment.",
    image: "/work/work-17.jpg",
    icon: "battery",
  },
  {
    title: "Generator Services",
    copy: "Supply, install and service generators for reliable backup power.",
    image: "/work/work-03.jpg",
    icon: "engine",
  },
];

export const stats = [
  { value: "2015", label: "Established" },
  { value: "7+", label: "Years experience" },
  { value: "200+", label: "Projects done" },
  { value: "6", label: "Core services" },
];

export const certs = [
  { name: "EPRA", detail: "Energy & Petroleum Regulatory Authority" },
  { name: "NCA", detail: "National Construction Authority" },
  { name: "KEBS", detail: "Kenya Bureau of Standards" },
  { name: "OSHA", detail: "Occupational Safety & Health" },
  { name: "NEMA", detail: "Environmental Management" },
  { name: "KRA", detail: "Tax compliant" },
];

export const gallery = [
  { src: "/work/work-07.jpg", label: "Rooftop solar array" },
  { src: "/work/work-11.jpg", label: "Solar field install" },
  { src: "/work/work-12.jpg", label: "PV panel rows" },
  { src: "/work/work-14.jpg", label: "Solar water heating" },
  { src: "/work/work-13.jpg", label: "Panel cleaning" },
  { src: "/work/work-10.jpg", label: "Evacuated tube systems" },
  { src: "/work/work-02.jpg", label: "Cassette HVAC" },
  { src: "/work/work-03.jpg", label: "Outdoor AC unit" },
  { src: "/work/work-18.jpg", label: "Mini-split install" },
  { src: "/work/work-04.jpg", label: "Refrigerant service" },
  { src: "/work/work-16.jpg", label: "Exterior CCTV" },
  { src: "/work/work-15.jpg", label: "Indoor dome camera" },
  { src: "/work/work-17.jpg", label: "UPS & network rack" },
  { src: "/work/work-09.jpg", label: "Electrical testing" },
  { src: "/work/work-08.jpg", label: "Voltage diagnostics" },
  { src: "/work/work-01.jpg", label: "Ventilation filters" },
  { src: "/work/work-06.jpg", label: "Kitchen exhaust filters" },
  { src: "/work/work-05.jpg", label: "Electrical repair" },
];

export const projects = [
  {
    title: "Commercial rooftop solar",
    copy: "Multi-row PV install delivering daytime power for a business site.",
    image: "/work/work-07.jpg",
  },
  {
    title: "Solar water heating bank",
    copy: "YOGISUN evacuated-tube arrays for large hot-water demand.",
    image: "/work/work-14.jpg",
  },
  {
    title: "Ground-mount solar field",
    copy: "Elevated panel structure for open-site generation.",
    image: "/work/work-11.jpg",
  },
  {
    title: "Office HVAC refresh",
    copy: "Cassette and split systems for comfort and efficiency.",
    image: "/work/work-02.jpg",
  },
  {
    title: "Site CCTV coverage",
    copy: "Indoor and outdoor Hikvision cameras for full perimeter view.",
    image: "/work/work-16.jpg",
  },
  {
    title: "IT rack & UPS",
    copy: "Protected power and networking for critical equipment.",
    image: "/work/work-17.jpg",
  },
];
