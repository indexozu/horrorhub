import ExportTitles from '../components/ExportTitles';
import ExportJSON from '../components/ExportJSON';

const Export = () => {
    return (
        <div style={{padding: '1em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '800px', display: 'block'}}>
                <h2>This is the export page.</h2>
                <p>You can export your favorites in two ways:</p>
                <ul>
                    <li>Text format: Exports your favorites as titles in a .txt file.</li>
                    <li>JSON format: Exports your favorites as a machine-readable JSON file. This includes more information about your favorites.</li>
                </ul>
                <div className='export-buttons'>
                    <ExportTitles /><ExportJSON />
                </div>
            </div>
        </div>
    );
};

export default Export;