from pathlib import Path

from setuptools import find_namespace_packages, setup

BASE_DIR = Path(__file__).parent
with open(BASE_DIR / "requirements.txt", mode="r") as file:
    required_packages = [package.strip() for package in file.readlines()]

docs_packages = [
    "mkdocstrings>=0.20.0",
]

setup(
    name="songbenvung",
    version=0.1,
    description="Sustainable Living",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/earthknowsbest/sustainable-living",
    author="earthknowsbest",
        python_requires=">=3.8",
        packages=find_namespace_packages(),
        install_requires=[required_packages],
    extras_require={
        "docs": docs_packages,
    },
)
