interface Props {
  color: string
}
const PerformingArtsIcon = ({ color }: Props) => {
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
        d="M21.5416 27.5267C25.5924 27.5267 28.8763 24.2428 28.8763 20.192C28.8763 16.1412 25.5924 12.8574 21.5416 12.8574C17.4909 12.8574 14.207 16.1412 14.207 20.192C14.207 24.2428 17.4909 27.5267 21.5416 27.5267Z"
        fill={color}
      />
      <path
        d="M41.9419 22.3596C42.8362 20.4731 42.0304 18.2192 40.1458 17.3269C38.2592 16.4327 36.0054 17.2384 35.1131 19.1231L30.4285 29.0096C29.4785 28.7827 28.4881 28.6615 27.4708 28.6615C24.1285 28.6615 21.09 29.9519 18.8208 32.0596L14.1438 27.3827C12.6688 25.9077 10.2746 25.9077 8.79961 27.3827C7.32461 28.8577 7.32461 31.2519 8.79961 32.7269L14.2015 38.1288C14.4554 38.3827 14.7361 38.5884 15.0342 38.7538C14.9265 39.2692 14.8458 39.7942 14.8035 40.3307C14.7573 40.8942 15.2092 41.3731 15.7746 41.3731H39.1727C39.7381 41.3731 40.1881 40.8923 40.1438 40.3307C39.9111 37.4673 38.7285 34.8711 36.9131 32.8596C37.0285 32.6923 37.1342 32.5192 37.2246 32.3307L41.9477 22.3596H41.9419Z"
        fill={color}
      />
    </svg>
  )
}

export default PerformingArtsIcon
