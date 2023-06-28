import { BoldFont, MediumFont } from '@/style/fonts'

export default function NotFound() {
  return <div style={
    {margin: '0 auto', width: '271px', textAlign: 'center'}
    }>
      <h1 className={BoldFont.className} style={
        {
          color: 'var(--accent-color)', fontSize: "131px", 
          marginBottom:'0'
        }
      }>404</h1>
      <p className={MediumFont.className} style={
        {
          color: 'var(--primary-color)', fontSize:"23px",
          marginTop:'0'
        }
      }>Страница не найдена</p>
  </div>
}