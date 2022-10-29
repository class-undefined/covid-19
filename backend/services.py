from dataset import DataSet
from typing import Dict, List
cov_data = DataSet()


def get_broadcast() -> Dict:
    """现有确诊 累计确诊 累计治愈 累计死亡 及新增"""
    return cov_data.WomWorld


def get_global_map() -> List[Dict]:
    return cov_data.WomAboard


def get_confirm_line() -> List[Dict]:
    return cov_data.confirm_line


def get_country_line(country_name: str) -> List[Dict]:
    return cov_data.get_country_line(country_name)


def get_city_line(city_code: str) -> List[Dict]:
    return cov_data.get_city_line(city_code)

def get_china_confirm() -> List[Dict]:
    return cov_data.get_china_confirm()