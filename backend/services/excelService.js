const XLSX = require("xlsx");
const path = require("path");

class ExcelService {

    constructor() {

        this.data = [];

        this.loadExcel();

    }

    /*
    ====================================
        Load Excel File
    ====================================
    */

    loadExcel() {

        try {

            const filePath = path.join(
                __dirname,
                "../Data/Demo Data.xlsx"
            );

            const workbook = XLSX.readFile(filePath);

            const sheetName = workbook.SheetNames[0];

            const worksheet = workbook.Sheets[sheetName];

            this.data = XLSX.utils.sheet_to_json(
                worksheet,
                {
                    defval: null
                }
            );

            console.log(
                `✅ Loaded ${this.data.length} telemetry records SUCCESSFULLY`
            );

        }
        catch (error) {

            console.error(
                "Failed to load Excel:",
                error
            );

        }

    }
/*
====================================
Sample Data
====================================
*/

    getSampledData(maxRows =20) {

        if (this.data.length <= maxRows) {
            return this.data;
        }

        const step = Math.ceil(this.data.length / maxRows);

        const sampled = [];

        for (let i = 0; i < this.data.length; i += step) {
            sampled.push(this.data[i]);
        }

        return sampled;
    };
    /*
    ====================================
        Entire Dataset
    ====================================
    */
   
    getAllData() {

        return this.data;

    }

    /*
    ====================================
        Latest Reading
    ====================================
    */

    getLatestData() {

        if (this.data.length === 0)
            return null;

        return this.data[this.data.length - 1];

    }

    /*
    ====================================
        First Reading
    ====================================
    */

    getFirstReading() {

        if (this.data.length === 0)
            return null;

        return this.data[0];

    }

    /*
    ====================================
        Total Records
    ====================================
    */

    getRecordCount() {

        return this.data.length;

    }

    /*
    ====================================
        Reload Excel
    ====================================
    */

    reload() {

        this.loadExcel();

    }

}

module.exports = new ExcelService();