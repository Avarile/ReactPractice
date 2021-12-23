// Infomation Display

export const UniversalLogDisplayer = (dataSource, logSetter) => {
  React.useEffect(() => {
    for (let i = 0; i <= dataSource.length; i++) {
      setTimeout(() => {
        logSetter((previousState) => [...previousState, dataSource[i]])
      }, i * 3000)
    }
  }, [])
}
// Usage Example:
// export const TextDisplayWindow = ({ dataSource, logPrintFunc }) => {
//   const [logArray, setLogArray] = useState([])

//   logPrintFunc(dataSource, setLogArray)
//   return (
//     <>
//       <TextWindow>
//         {logArray.map((logItem, index) => {
//           return <p key={index}>{logItem}</p>
//         })}
//       </TextWindow>
//     </>
//   )
// }

// const TextWindow = styled.div`
//   height: calc(100vh - 0px);
//   margin: 10px, 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
// `
// const SingleLog = styled.p``
