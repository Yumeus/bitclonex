import { mobilePoints, mobileTickerPairs } from "@/data";
import { Container, Icon, Section } from "@/components/ui";

export function MobileSection() {
  return (
    <Section>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-wider">
            Mobile Ecosystem
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            Native iOS &amp; Android Trading Apps
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Deliver an uncompromised institutional trading experience on mobile devices. Built
            natively with React Native / Flutter, our mobile binaries feature zero-lag candlestick
            interactions, instant FaceID/TouchID authentication, and low-latency push notifications.
          </p>
          <div className="space-y-2 pt-2">
            {mobilePoints.map((text) => (
              <div key={text} className="flex items-center gap-3">
                <Icon name="check_circle" className="text-primary-container" />
                <span className="text-on-surface font-body-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[300px] h-[540px] sm:h-[580px] bg-surface-container-lowest rounded-[40px] border-4 border-surface-container-high p-4 flex flex-col justify-between shadow-2xl relative">
            <div className="w-32 h-5 bg-surface-container-high rounded-full mx-auto" />
            <div className="flex-1 flex flex-col justify-between py-4 font-label-code-md">
              <div>
                <div className="flex justify-between items-center text-xs text-outline pb-2">
                  <span>Bitclonex Pro Mobile</span>
                  <span className="text-primary-container">5G • 100%</span>
                </div>
                <div className="p-3 bg-surface-container rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-outline text-[10px]">Total Balance</span>
                    <div className="text-on-surface text-base font-bold">$68,420.50</div>
                  </div>
                  <Icon name="qr_code_scanner" className="text-primary-container" />
                </div>
                <div className="mt-3 space-y-2">
                  {mobileTickerPairs.map(([pair, change, color]) => (
                    <div
                      key={pair}
                      className="flex justify-between text-xs p-2 bg-surface-container/60 rounded"
                    >
                      <span className="text-on-surface">{pair}</span>
                      <span className={`${color} font-bold`}>{change}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-around pt-3 border-t border-outline-variant/30 text-outline">
                <Icon name="show_chart" className="text-primary-container" />
                <Icon name="swap_horiz" />
                <Icon name="account_balance_wallet" />
                <Icon name="person" />
              </div>
            </div>
            <div className="w-24 h-1 bg-outline-variant rounded-full mx-auto" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
