interface Props {
  color: string
}
const SportsIcon = ({ color }: Props) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35.8369 15.3427C35.7081 15.1985 35.4831 15.1792 35.3331 15.3004C32.4792 17.6004 30.6484 21.1216 30.6484 25.0639C30.6484 29.0062 32.4504 32.4716 35.2677 34.7716C35.4177 34.8946 35.6427 34.8773 35.7734 34.7331C38.1023 32.1581 39.5215 28.7466 39.5215 25.0023C39.5215 21.2581 38.1273 17.91 35.8388 15.3446L35.8369 15.3427Z"
        fill={color}
      />
      <path
        d="M28.6621 25.0612C28.6621 20.6382 30.6525 16.6728 33.7833 14.0074C33.9621 13.8555 33.9641 13.5766 33.7756 13.4343C31.3372 11.5824 28.2987 10.4805 25.0006 10.4805C21.7025 10.4805 18.7352 11.5574 16.3121 13.3709C16.1256 13.5112 16.116 13.7939 16.2929 13.9459C19.3814 16.6112 21.341 20.5497 21.341 24.9382C21.341 29.3266 19.3506 33.3266 16.2198 35.992C16.041 36.1439 16.0391 36.4228 16.2275 36.5651C18.666 38.417 21.7045 39.5189 25.0025 39.5189C28.3006 39.5189 31.2679 38.442 33.691 36.6285C33.8775 36.4882 33.8871 36.2055 33.7102 36.0535C30.6218 33.3882 28.6621 29.4497 28.6621 25.0612Z"
        fill={color}
      />
      <path
        d="M14.7343 15.2305C14.5843 15.1075 14.3593 15.1248 14.2285 15.269C11.8997 17.844 10.4805 21.2555 10.4805 24.9998C10.4805 28.744 11.8747 32.0921 14.1632 34.6575C14.292 34.8017 14.517 34.8209 14.667 34.6998C17.5209 32.3998 19.3516 28.8786 19.3516 24.9363C19.3516 20.994 17.5497 17.5286 14.7324 15.2286L14.7343 15.2305Z"
        fill={color}
      />
    </svg>
  )
}

export default SportsIcon