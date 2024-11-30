interface Props {
  color: string
}
const HumanitiesIcon = ({ color }: Props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path
        d="M39.3411 29.7824C40.9181 28.1285 41.8277 26.1805 41.8277 24.0959C41.8277 18.0959 34.2931 13.2305 25.0008 13.2305C15.7084 13.2305 8.17383 18.0959 8.17383 24.0959C8.17383 30.0959 15.7084 34.9612 25.0008 34.9612C28.2296 34.9612 31.2431 34.3747 33.8046 33.3555L36.2719 35.8228C37.5296 37.0805 39.5681 37.0805 40.8277 35.8228C42.0854 34.5651 42.0854 32.5266 40.8277 31.267L39.3411 29.7805V29.7824Z"
        fill={color}
      />
    </svg>
  )
}

export default HumanitiesIcon
