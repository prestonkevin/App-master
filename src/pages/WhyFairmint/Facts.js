import React from 'react'
import PropTypes from 'prop-types'
import { Card, Table } from 'semantic-ui-react'

import './Facts.style.less'

const Facts = ({ data }) => (
  <Card className="card-large-padding facts-box">
    <Card.Content>
      <Card.Header>Key Facts</Card.Header>
    </Card.Content>
    <Card.Content>
      <Table basic="very">
        <Table.Body>
          <Table.Row>
            <Table.Cell className="key">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.123 1.04867C14.97 0.987 11.3367 -0.435333 8.50968 1.06367C6.26968 2.25267 2.33768 1.36067 1.33268 1.10267V0.333333C1.33268 0.149 1.18368 0 0.999349 0C0.815016 0 0.666016 0.149 0.666016 0.333333V1.33333C0.666016 1.338 0.668349 1.342 0.668682 1.34667C0.668682 1.35067 0.666016 1.354 0.666016 1.358V11V11.358V19.6667C0.666016 19.851 0.815016 20 0.999349 20C1.18368 20 1.33268 19.851 1.33268 19.6667V11.7917C2.09035 11.9807 3.74168 12.3357 5.45535 12.3357C6.64102 12.3357 7.85535 12.1653 8.82235 11.6527C11.373 10.299 14.841 11.654 14.8757 11.6677C14.9787 11.709 15.0947 11.6963 15.1864 11.6337C15.2777 11.572 15.3327 11.4687 15.3327 11.358V1.358C15.3327 1.22167 15.2497 1.09933 15.123 1.04867ZM14.666 10.8883C13.5794 10.5423 10.784 9.85633 8.50968 11.0633C6.27002 12.252 2.33935 11.3607 1.33268 11.1027V11V1.79167C2.61702 2.112 6.45968 2.906 8.82235 1.65267C11.011 0.491667 13.875 1.32433 14.666 1.59233V10.8883Z" fill="#5F5F5F" />
              </svg>
              <span>CEO</span>
            </Table.Cell>
            <Table.Cell>{data.ceo.name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="key">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0053 14.2963L10.821 12.7043C10.5206 12.554 10.334 12.252 10.334 11.916V10.789C10.4103 10.6957 10.4907 10.5893 10.5737 10.472C10.9867 9.88867 11.3177 9.23933 11.5583 8.539C12.0287 8.32333 12.334 7.85833 12.334 7.33333V6C12.334 5.679 12.214 5.368 12.0007 5.125V3.352C12.0193 3.16867 12.0927 2.07733 11.3033 1.177C10.6187 0.396 9.50765 0 8.00065 0C6.49365 0 5.38265 0.396 4.69798 1.17667C3.90865 2.077 3.98198 3.16867 4.00065 3.352V5.125C3.78732 5.368 3.66732 5.679 3.66732 6V7.33333C3.66732 7.739 3.85165 8.11733 4.16632 8.36967C4.47165 9.57867 5.11065 10.4897 5.33398 10.782V11.885C5.33398 12.2077 5.15798 12.5037 4.87498 12.6583L1.90132 14.2803C0.934318 14.808 0.333984 15.8193 0.333984 16.9207V18C0.333984 19.582 5.34898 20 8.00065 20C10.6523 20 15.6673 19.582 15.6673 18V16.9857C15.6673 15.8397 15.0303 14.809 14.0053 14.2963ZM15.0007 18C15.0007 18.4523 12.53 19.3333 8.00065 19.3333C3.47132 19.3333 1.00065 18.4523 1.00065 18V16.9207C1.00065 16.0637 1.46798 15.276 2.22032 14.866L5.19398 13.244C5.69165 12.9723 6.00065 12.4513 6.00065 11.885V10.5453L5.92298 10.4527C5.91498 10.443 5.09798 9.45467 4.78632 8.09767L4.75598 7.96567L4.64232 7.89233C4.44932 7.76767 4.33398 7.55867 4.33398 7.33333V6C4.33398 5.813 4.41332 5.63867 4.55732 5.50833L4.66732 5.40933V3.33333L4.66432 3.28967C4.66332 3.28067 4.54998 2.35667 5.19932 1.616C5.75165 0.986 6.69432 0.666667 8.00065 0.666667C9.30232 0.666667 10.243 0.983667 10.796 1.60933C11.445 2.343 11.3377 3.28167 11.337 3.28967L11.334 5.40933L11.444 5.50867C11.588 5.63867 11.6673 5.813 11.6673 6V7.33333C11.6673 7.62433 11.4767 7.879 11.1933 7.96633L11.0273 8.01733L10.974 8.18233C10.751 8.876 10.4333 9.51667 10.0293 10.0867C9.93032 10.227 9.83398 10.3513 9.75032 10.4463L9.66732 10.541V11.916C9.66732 12.506 9.99498 13.0363 10.5227 13.3003L13.707 14.8923C14.505 15.2913 15.0007 16.0933 15.0007 16.9857V18Z" fill="#5F5F5F" />
              </svg>
              <span>Employees</span>
            </Table.Cell>
            <Table.Cell>{data.team}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="key">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9668 6.24733C19.6749 3.03407 17.4005 0.702777 14.5542 0.702777C12.6579 0.702777 10.9217 1.72322 9.94471 3.3587C8.97658 1.70207 7.31148 0.702393 5.44561 0.702393C2.59967 0.702393 0.324928 3.03368 0.0333724 6.24694C0.0102942 6.38888 -0.0843267 7.13584 0.203382 8.35399C0.618021 10.111 1.57577 11.7092 2.97239 12.9746L9.9401 19.2977L17.0274 12.975C18.424 11.7092 19.3818 10.1114 19.7964 8.35399C20.0841 7.13623 19.9895 6.38926 19.9668 6.24733ZM19.0475 8.17782C18.6691 9.78253 17.7917 11.2445 16.5128 12.4031L9.94471 18.263L3.48934 12.4046C2.20811 11.2438 1.33114 9.78215 0.952272 8.17744C0.679948 7.02468 0.791878 6.37349 0.792262 6.36926L0.798032 6.33041C1.04805 3.51525 3.00239 1.47167 5.44561 1.47167C7.2484 1.47167 8.83542 2.57942 9.58854 4.36222L9.94279 5.20188L10.297 4.36222C11.0382 2.60673 12.7091 1.47205 14.5546 1.47205C16.9974 1.47205 18.9522 3.51563 19.2072 6.36734C19.2079 6.37349 19.3199 7.02507 19.0475 8.17782Z" fill="#5F5F5F" />
              </svg>
              <span>Legal Name</span>
            </Table.Cell>
            <Table.Cell>{data.legal_name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="key">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48615 2 2 6.48577 2 12C2 17.5142 6.48615 22 12 22C17.5138 22 22 17.5142 22 12C22 6.48577 17.5138 2 12 2ZM12 21.2308C6.91038 21.2308 2.76923 17.0896 2.76923 12C2.76923 6.91038 6.91038 2.76923 12 2.76923C17.0896 2.76923 21.2308 6.91038 21.2308 12C21.2308 17.0896 17.0896 21.2308 12 21.2308Z" fill="#5F5F5F" />
                <path d="M16.7122 7.89846L10.8011 14.5485L7.23991 11.6996C7.07452 11.5669 6.83183 11.5942 6.69952 11.7596C6.56683 11.9258 6.59375 12.1677 6.75952 12.3004L10.6057 15.3773C10.6764 15.4338 10.7614 15.4615 10.8461 15.4615C10.9522 15.4615 11.058 15.4177 11.1338 15.3323L17.2876 8.40923C17.4288 8.25076 17.4145 8.0073 17.2557 7.86653C17.0964 7.72499 16.8538 7.73923 16.7122 7.89846Z" fill="#5F5F5F" />
              </svg>
              <span>Legal Entity</span>
            </Table.Cell>
            <Table.Cell>{data.legal_entity}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="key">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0646 6.38306C10.6551 6.38306 9.50781 7.53031 9.50781 8.93981C9.50781 10.3493 10.6551 11.4966 12.0646 11.4966C13.4741 11.4966 14.6213 10.3493 14.6213 8.93981C14.6213 7.53031 13.4741 6.38306 12.0646 6.38306ZM12.0646 10.7661C11.0576 10.7661 10.2383 9.9468 10.2383 8.93981C10.2383 7.93281 11.0576 7.11356 12.0646 7.11356C13.0716 7.11356 13.8908 7.93281 13.8908 8.93981C13.8908 9.9468 13.0716 10.7661 12.0646 10.7661Z" fill="#5F5F5F" />
                <path d="M16.9534 4.05161C15.6305 2.72867 13.8715 2 12.0007 2C10.1295 2 8.3708 2.72867 7.04787 4.05161C4.5996 6.49952 4.29534 11.1053 6.38896 13.8958L12.0007 22L17.604 13.9072C19.706 11.1053 19.4017 6.49952 16.9534 4.05161ZM17.0115 13.4802L12.0007 20.7165L6.98176 13.4689C5.08282 10.9369 5.35493 6.77747 7.5647 4.56807C8.74957 3.3832 10.3249 2.7305 12.0007 2.7305C13.6764 2.7305 15.2517 3.3832 16.437 4.56807C18.6467 6.77747 18.9189 10.9369 17.0115 13.4802Z" fill="#5F5F5F" />
              </svg>
              <span>Headquaters</span>
            </Table.Cell>
            <Table.Cell>{data.headquarters}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="key">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5658 9.10321C19.9595 8.71955 20.0984 8.15647 19.9286 7.63305C19.7584 7.10962 19.3151 6.73597 18.7704 6.65667L13.9278 5.95303C13.7216 5.92299 13.5434 5.79364 13.4513 5.60661L11.2863 1.21855C11.0432 0.725557 10.5498 0.419189 9.99992 0.419189C9.45046 0.419189 8.95707 0.725557 8.71397 1.21855L6.54858 5.60661C6.45646 5.79364 6.27785 5.92299 6.0716 5.95303L1.22899 6.65707C0.684739 6.73597 0.241407 7.10962 0.0712024 7.63305C-0.0986013 8.15647 0.0403654 8.71955 0.434038 9.10321L3.93784 12.5185C4.08722 12.6643 4.1557 12.8741 4.12046 13.0792L3.29347 17.9022C3.20056 18.444 3.41882 18.9811 3.86375 19.3047C4.30829 19.6286 4.88698 19.6707 5.37437 19.414L9.70516 17.1369C9.88978 17.0399 10.11 17.0399 10.2947 17.1369L14.6259 19.414C14.8373 19.5253 15.0664 19.5802 15.2943 19.5802C15.5902 19.5802 15.885 19.4877 16.1365 19.3047C16.5814 18.9811 16.7997 18.444 16.7068 17.9022L15.8794 13.0796C15.8441 12.8741 15.9126 12.6647 16.062 12.5189L19.5658 9.10321ZM15.0904 13.2149L15.9174 18.0375C15.9591 18.2802 15.865 18.5121 15.6655 18.6571C15.4657 18.8016 15.217 18.8193 14.9987 18.7055L10.6675 16.428C10.4589 16.3187 10.229 16.2634 9.99992 16.2634C9.77084 16.2634 9.54137 16.3187 9.33232 16.4284L5.00192 18.7055C4.78286 18.8193 4.53416 18.8016 4.33472 18.6571C4.13528 18.5121 4.04157 18.2806 4.08282 18.0375L4.90981 13.2149C4.9895 12.7496 4.83532 12.2746 4.49731 11.9454L0.993109 8.52972C0.816497 8.35751 0.756425 8.11482 0.832917 7.88054C0.909008 7.64586 1.10004 7.48487 1.34393 7.44922L6.18614 6.74558C6.6535 6.6779 7.05759 6.38475 7.26624 5.96104L9.43164 1.57297C9.54057 1.35191 9.75322 1.22015 9.99952 1.22015C10.2462 1.22015 10.4585 1.35191 10.5678 1.57297L12.7332 5.96104C12.9418 6.38475 13.3455 6.6779 13.8129 6.74558L18.6555 7.44922C18.8994 7.48487 19.0904 7.64586 19.1665 7.88054C19.2426 8.11482 19.1829 8.35751 19.0063 8.52972L15.5025 11.945C15.1645 12.2746 15.0103 12.7492 15.0904 13.2149Z" fill="#5F5F5F" />
              </svg>
              <span>Founded</span>
            </Table.Cell>
            <Table.Cell>{data.founded}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="key">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48615 2 2 6.48577 2 12C2 17.5142 6.48615 22 12 22C17.5138 22 22 17.5142 22 12C22 6.48577 17.5138 2 12 2ZM12 21.2308C6.91038 21.2308 2.76923 17.0896 2.76923 12C2.76923 6.91038 6.91038 2.76923 12 2.76923C17.0896 2.76923 21.2308 6.91038 21.2308 12C21.2308 17.0896 17.0896 21.2308 12 21.2308Z" fill="#5F5F5F" />
                <path d="M16.8086 11.6154H12.3855V7.38462C12.3855 7.17192 12.2132 7 12.0009 7C11.7886 7 11.6163 7.17192 11.6163 7.38462V11.6154H7.19321C6.9809 11.6154 6.80859 11.7873 6.80859 12C6.80859 12.2127 6.9809 12.3846 7.19321 12.3846H11.6163V17C11.6163 17.2127 11.7886 17.3846 12.0009 17.3846C12.2132 17.3846 12.3855 17.2127 12.3855 17V12.3846H16.8086C17.0209 12.3846 17.1932 12.2127 17.1932 12C17.1932 11.7873 17.0209 11.6154 16.8086 11.6154Z" fill="#5F5F5F" />
              </svg>
              <span>Key Investors</span>
            </Table.Cell>
            <Table.Cell>{data.key_investors}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card.Content>
  </Card>
)

Facts.propTypes = {
  data: PropTypes.object,
}

export default Facts
