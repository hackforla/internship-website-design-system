const fs = require('fs');
const pa11y = require('pa11y');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path')

const docsFolder = path.join(__dirname, '../docs');
const baseUrl = 'http://127.0.0.1:8000/internship-website-design-system/';

function getMarkdownFiles(dir) {
    const mdFilesToIgnore = ['index.md'];
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (mdFilesToIgnore.includes(file)) return;
        const filePath = path.join(dir, file);
        if (file.endsWith('.md')) {
            results.push(filePath);
        }
    })
    return results;
}

function generateUrls(files) {
    return files.map(file => {
        const relativePath = path.relative(docsFolder, file);
        const urlPath = relativePath.replace(/\.md$/, '').replace(/\\/g, '/');
        return `${baseUrl}${urlPath}`;
    });
}

async function runAccessibilityTest() {
    try {
        const csvWriter = createCsvWriter({
            path: path.join(__dirname, '../output', 'pa11y-results.csv'),
            header: [
                { id: 'url', title: 'URL' },
                { id: 'issueType', title: 'Issue Type' },
                { id: 'code', title: 'Code' },
                { id: 'message', title: 'Message' },
                { id: 'context', title: 'Context' },
                { id: 'selector', title: 'Selector' }
            ]
        });

        let records = [];
        console.log('\x1b[34m%s\x1b[0m', '~~~~~~~ ACCESSIBILITY TESTING REPORT ~~~~~~~');
        for (let url of urls) {
            console.log('\x1b[35m%s\x1b[0m', `Testing URL: ${url}`);
            const results = await pa11y(url);
            const issueCount = results.issues.length;
            const color = issueCount > 0 ? '\x1b[31m' : '\x1b[32m';
            const symbol = issueCount === 0 ? '\u2714' : '\u2716';
            console.log(`${color}${symbol} ${issueCount} ${issueCount > 1 ? 'errors' : 'error'} found.\x1b[0m`);
            results.issues.forEach(issue => {
                records.push({
                    url: url,
                    issueType: issue.type,
                    code: issue.code,
                    message: issue.message,
                    context: issue.context,
                    selector: issue.selector
                });
            });
        }
        await csvWriter.writeRecords(records);
        console.log('\x1b[31m%s\x1b[0m', `Total accessibility errors found: ${records.length}`);
        console.log('The CSV file containing Pa11y results has been successfully created.\nPlease check the /output folder.\n');
    } catch (error) {
        console.error(`Error: ` + error.message);
        const mkdocscmd = '\x1b[32m' + 'mkdocs serve' + '\x1b[0m';
        const dockercmd = '\x1b[32m' + 'docker run -p 8000:8000 -v ${PWD}:/app mkdocs-site' + '\x1b[0m';
        console.log(`${'\x1b[31m'}Ensure that the site is being served locally via ${dockercmd} ${'\x1b[31m'}or ${mkdocscmd}`);
    }
}

const markdownFiles = getMarkdownFiles(docsFolder);
const urls = generateUrls(markdownFiles)
runAccessibilityTest(urls);