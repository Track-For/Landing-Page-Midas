const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 try {for(const width of [1440,390]){
 const page=await browser.newPage({viewport:{width,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5174');await page.waitForTimeout(300);
 assert.equal(await page.locator('a[href*="5511999999999"]').count(),0);
 await page.locator('#modalidades').scrollIntoViewIfNeeded();await page.getByRole('button',{name:'Próxima modalidade',exact:true}).click();
 await page.locator('.feature-option').nth(1).click();assert.equal(await page.locator('.feature-display h3').textContent(),'Entenda a liquidez de cada lado.');
 await page.locator('.course-cover').nth(3).click();assert.equal(await page.locator('.course-cover.active').count(),1);
 await page.locator('#precos').scrollIntoViewIfNeeded();
 await page.getByRole('button',{name:'Recorrência Mensal',exact:true}).click();await page.getByRole('button',{name:'Assinar Pro',exact:true}).click();
 assert.equal(await page.getByRole('button',{name:'Mensal · R$ 97',exact:true}).getAttribute('aria-pressed'),'true');
 await page.getByRole('button',{name:'Fechar checkout'}).click();
 await page.getByRole('button',{name:/Plano Anual/}).click();await page.getByRole('button',{name:'Assinar Pro',exact:true}).click();
 assert.equal(await page.getByRole('button',{name:'Anual · R$ 936',exact:true}).getAttribute('aria-pressed'),'true');
 await page.getByRole('button',{name:'Fechar checkout'}).click();
 for(const section of await page.locator('main section').all()){await section.scrollIntoViewIfNeeded();await page.waitForTimeout(70);}
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth), 'horizontal overflow');
 await page.locator('.course-covers').scrollIntoViewIfNeeded();await page.waitForTimeout(500);await page.screenshot({path:`/private/tmp/midas-courses-${width}.png`});
 await page.locator('#modalidades').scrollIntoViewIfNeeded();await page.waitForTimeout(600);await page.screenshot({path:`/private/tmp/midas-modalities-${width}.png`});
 await page.emulateMedia({reducedMotion:'reduce'});await page.reload();await page.locator('#robos').scrollIntoViewIfNeeded();assert.equal(await page.locator('.type-reveal').evaluate(el=>getComputedStyle(el).clipPath),'none');
 assert.deepEqual(errors,[]);console.log(`${width}px: checkout cycles, carousel, gallery, courses, overflow, reduced motion, JS errors: PASS`);await page.close();
 }}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
