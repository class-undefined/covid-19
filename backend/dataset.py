import requests
class DataSet():
    def __init__(self):
        self.global_data = None
        self.WomWorld = None
        self.WomAboard = None
        self.FAutoCountryConfirmAdd = None
        self.confirm_line = None
        self.country_line = {}
        self.city_line = {}
        self.china_confirm = None
        self._headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.24"
        }
        self.__get_global()
        self.__get_dxy_data()
        
        
    def __get_global(self):
        url = "https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoCountryConfirmAdd,WomWorld,WomAboard"
        response = requests.post(url, headers=self._headers)
        response.raise_for_status()
        cnt = response.json()
        data = cnt["data"]
        self.WomWorld = data["WomWorld"]
        self.WomAboard = data["WomAboard"]
        self.FAutoCountryConfirmAdd = data["FAutoCountryConfirmAdd"]
        return cnt
    
    def __get_dxy_data(self):
        url = "https://file1.dxycdn.com/2020/0315/553/3402160512808052518-135.json"
        response = requests.get(url, headers=self._headers)
        response.raise_for_status()
        cnt = response.json()
        self.confirm_line = cnt["data"]
        return cnt
    
    def get_country_line(self, country_name: str):
        if country_name in self.country_line:
            return self.country_line[country_name]
        url = f"https://api.inews.qq.com/newsqa/v1/automation/foreign/daily/list?country={country_name}"
        response = requests.get(url, headers=self._headers)
        response.raise_for_status()
        cnt = response.json()
        self.country_line[country_name] = cnt["data"]
        return self.country_line[country_name]
    
    def get_city_line(self, city_code: str):
        url = f"https://api.inews.qq.com/newsqa/v1/query/pubished/daily/list?adCode={city_code}&limit=30"
        response = requests.get(url, headers=self._headers)
        response.raise_for_status()
        cnt = response.json()
        self.city_line[city_code] = cnt["data"]
        return self.city_line[city_code]
    
    def get_china_confirm(self):
        if self.china_confirm is not None:
            return self.china_confirm
        url = "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayListNew,chinaDayAddListNew&limit=30"
        response = requests.get(url, headers=self._headers)
        response.raise_for_status()
        cnt = response.json()
        self.china_confirm = cnt["data"]
        return self.china_confirm
    
    def export_global_data(self, filename: str):
        import json
        data = self.__get_global()
        with open(filename, "w", encoding="utf8") as file:
            file.write(json.dumps(data))
        
    


# data_set = DataSet()
# data_set.export_global_data("global.json")
    