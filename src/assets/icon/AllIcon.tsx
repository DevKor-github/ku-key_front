interface Props {
  color: string
}
const AllIcon = ({ color }: Props) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.6387 16.0789C11.1502 15.7789 11.706 15.627 12.3079 15.627C12.8675 15.627 13.3964 15.7808 13.8925 16.0885C14.3887 16.3962 14.7214 16.8231 14.8906 17.3693L20.0137 33.2712C20.1887 33.8154 19.7829 34.3731 19.2098 34.3731H16.3944C16.0137 34.3731 15.681 34.1193 15.581 33.752L14.9348 31.3846C14.8348 31.0173 14.5002 30.7635 14.1214 30.7635H10.3714C9.99059 30.7635 9.6579 31.0173 9.5579 31.3846L8.91174 33.752C8.81174 34.1193 8.47713 34.3731 8.09828 34.3731H5.36174C4.79059 34.3731 4.38482 33.8173 4.5579 33.2731L9.60405 17.3673C9.78674 16.8077 10.1329 16.377 10.6425 16.077L10.6387 16.0789ZM13.5117 26.152L13.0598 24.4808C12.8348 23.6481 11.656 23.6481 11.431 24.4808L10.9791 26.152C10.8348 26.6885 11.2387 27.2154 11.7944 27.2154H12.6964C13.2521 27.2154 13.656 26.6885 13.5117 26.152Z"
        fill={color}
      />
      <path
        d="M23.1379 34.0481C22.6629 33.8308 22.3263 33.4846 22.1302 33.0096C21.934 32.5346 21.8359 31.8827 21.8359 31.0577V17.7693C21.8359 17.0981 22.0494 16.5731 22.4763 16.1943C22.9032 15.8173 23.4167 15.627 24.0186 15.627C24.6206 15.627 25.134 15.8154 25.5609 16.1943C25.9879 16.5731 26.2013 17.0962 26.2013 17.7693V30.0923C26.2013 30.3443 26.2436 30.5096 26.3263 30.5866C26.4109 30.6635 26.5706 30.702 26.809 30.702H31.4686C32.0417 30.702 32.4686 30.8808 32.7494 31.2366C33.0282 31.5943 33.1686 32.0173 33.1686 32.5058C33.1686 32.9943 33.0244 33.4289 32.7379 33.8077C32.4513 34.1846 32.0282 34.375 31.4686 34.375H25.1071C24.2667 34.375 23.609 34.2673 23.134 34.05L23.1379 34.0481Z"
        fill={color}
      />
      <path
        d="M35.7355 34.0481C35.2605 33.8308 34.924 33.4846 34.7278 33.0096C34.5317 32.5346 34.4336 31.8827 34.4336 31.0577V17.7693C34.4336 17.0981 34.6471 16.5731 35.074 16.1943C35.5009 15.8173 36.0144 15.627 36.6163 15.627C37.2182 15.627 37.7317 15.8154 38.1586 16.1943C38.5855 16.5731 38.799 17.0962 38.799 17.7693V30.0923C38.799 30.3443 38.8413 30.5096 38.924 30.5866C39.0086 30.6635 39.1682 30.702 39.4067 30.702H44.0663C44.6394 30.702 45.0663 30.8808 45.3471 31.2366C45.6259 31.5943 45.7663 32.0173 45.7663 32.5058C45.7663 32.9943 45.6221 33.4289 45.3355 33.8077C45.049 34.1846 44.6259 34.375 44.0663 34.375H37.7047C36.8644 34.375 36.2067 34.2673 35.7317 34.05L35.7355 34.0481Z"
        fill={color}
      />
    </svg>
  )
}

export default AllIcon