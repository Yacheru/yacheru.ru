import './yacheru.css';

export default function Yacheru() {
  return (
    <main className={'inner-container flex center cl'}>
      <div>
        <div className={'top-container flex center'}>
          <div className={'nickname'}>
            Yache<span>ru</span>
          </div>
          <nav className={'navbar'}>
            <ul className={'list'}>
              <li className={'list-item'}>
                <a href="https://github.com/Yacheru?tab=repositories" target={'_blank'} rel="noreferrer">
                  Projects
                </a>
              </li>
              <li className={'list-item'}>
                <a href="" target={'_blank'}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={'under-text flex'}>
          <div className={'flex'}>
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>m</span>
            <span>e</span>
            <span>n</span>
            <span>t</span>
          </div>
          <div className={'flex'}>
            <span>e</span>
            <span>n</span>
            <span>t</span>
            <span>h</span>
            <span>u</span>
            <span>s</span>
            <span>i</span>
            <span>a</span>
            <span>s</span>
            <span>t</span>
          </div>
        </div>
      </div>
    </main>
  )
}
